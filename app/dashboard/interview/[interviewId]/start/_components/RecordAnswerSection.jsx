"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAiModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(()=>{
if(!isRecording&&userAnswer.length>10){
  UpdateUserAnswer();
}
  },[userAnswer])

  const StartStopRecoding = async () => {
    if (isRecording) {
      stopSpeechToText();
      // if (userAnswer?.length < 10) {
      //   setLoading(false);
      //   toast("Error while saving your answer,Please record again");
      //   return;
      // }

    
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer= async()=>{
    setLoading(true);
  console.log(userAnswer)
    const feedbackPromt =
    "Question:" +
    mockInterviewQuestion[activeQuestionIndex]?.question +
    ", user Answer: " +
    userAnswer +
    ",Depends on question and user answer for given interview question" +
    "Please give us rating for answer and feedback as area of improvment if any" +
    "in just 3 to 5 lines to improve it in  JSON format with rating field and feedback field";

  const result = await chatSession.sendMessage(feedbackPromt);

  const mockJsonResp = result.response
    .text()
    .replace("```json", "")
    .replace("```", "");

  console.log(mockJsonResp);
  const JsonFeedbackResp = JSON.parse(mockJsonResp);

  const resp = await db.insert(UserAnswer).values({
    mockIdRef: interviewData?.mockId,
    question: mockInterviewQuestion[activeQuestionIndex]?.question,
    correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
    userAns: userAnswer,
    feedback: JsonFeedbackResp?.feedback,
    rating: JsonFeedbackResp?.rating,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    createdAt: moment().format("DD-MM-YYYY"),
  });

  if (resp) {
    toast("User Answer recored successfully");
    setUserAnswer("")
    setResults([]);
    
  }
  setResults([]);
  // setUserAnswer("");
  setLoading(false);

  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-20">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disable={loading}
        className="my-10"
        variant="outline"
        onClick={StartStopRecoding}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2">
            <Mic />
            Stop Recording
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>

    </div>
  );
}

export default RecordAnswerSection;
