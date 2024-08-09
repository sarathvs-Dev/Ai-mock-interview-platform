'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic } from 'lucide-react'


function RecordAnswerSection() {
    const [userAnswer,setUserAnswer]=useState('');
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });

useEffect(()=>{
 results.map((result)=>(
    setUserAnswer(prevAns=>prevAns+result?.transcript)
 ))
},[results])


  return (
   <div className='flex flex-col justify-center items-center'>
     <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-5 mt-20'>
        <Image src={'/webcam.png'} width={200} height={200} className='absolute' />
        <Webcam
        mirrored={true}
        style={{
            height:300,
            width:'100%',
            zIndex:10,
            
        }}
        />
    </div>
    <Button className="my-10" variant="outline" onClick={isRecording?stopSpeechToText:startSpeechToText}>
        {isRecording?
        <h2 className='text-red-600 flex gap-2'><Mic/>Stop Recording</h2>:
        'Record Answer'}</Button>

    <Button onClick={()=>console.log(userAnswer)} >show</Button>
   </div>
  )
}

export default RecordAnswerSection