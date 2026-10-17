import { useState, useEffect} from "react"
function WhistleCounter()
{
    const [ count,setCount] = useState(0)
    const [ food , setFood] = useState("")
    const [target, setTarget] =useState(0)
    const [isListening , setIsListening] = useState(false)
    useEffect(()=>{
        if(isListening === true )
        {
navigator.mediaDevices.getUserMedia({
            audio: true
})
.then((stream)=>{
    const audioContext = new AudioContext()
    const analyser = audioContext.createAnalyser()
    const source =
    audioContext.createMediaStreamSource(stream)
    console.log(source)
    console.log(stream)
    console.log(audioContext)
    console.log(analyser)
    source.connect(analyser)
    analyser.fftSize = 2048
    const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)
analyser.getByteFrequencyData(dataArray)
console.log(dataArray)
let whistleDetected = false
let lastWhistleTime = 0
let whistleStartTime = 0    
const check =()=>{
analyser.getByteFrequencyData(dataArray)
let maxValue = 0
let maxIndex =0

for(let i = 0 ;i<dataArray.length ;i++)
{
    if(dataArray[i] > maxValue)
    {
    maxValue = dataArray[i]
    maxIndex = i
}    
}
const frequency = maxIndex * audioContext.sampleRate / analyser.fftSize
const currentTime = Date.now()
if(
    frequency >= 3000 &&
    frequency <= 5000 &&
    maxValue > 80 &&
    whistleDetected === false)
    {
        if(whistleStartTime  === 0 )
        {
            whistleStartTime = currentTime
        }
        if(currentTime - lastWhistleTime >= 300)
    {
        setCount(prev => prev+1)
    lastWhistleTime = currentTime
    whistleDetected = true
    whistleStartTime = 0
     console.log("🔥 WHISTLE DETECTED")
    }

}
else if(frequency < 3000 || frequency > 5000 || maxValue <= 80)
{
    whistleDetected = false
    whistleStartTime = 0
}
console.log(frequency)
console.log(maxValue)
    requestAnimationFrame(check)
   
}
check()

})
        }
        
    },[isListening])
    return(
        <div>
<h1> Cooker Whistle Counter</h1>
<p>Whistles</p>
<p> {count} / {target}</p>
{target > 0 && count === target && <p>🎉 Target reached!</p>}
{isListening && <p>Listensing...</p>}
<p>{food}</p>
<button onClick= {()=>setCount( count+1 )}>WHISTLE</button>
<button onClick={()=>setCount(0)}>RESET</button>
<button onClick ={()=>{setCount(0);setFood("Rice");setTarget(8)}}>RICE</button>
<button onClick ={()=>{setCount(0);setFood("Potato");setTarget(10)}}>POTATO</button>
<button onClick ={()=>{setCount(0);setFood("Dal"); setTarget(6)}}>DAL</button>
<button onClick ={()=>{setCount(0);setFood("Chana"); setTarget(7)}}>CHANA</button>
<button onClick ={()=>{setCount(0);setFood("Meat"); setTarget(15)}}>MEAT</button>
<button onClick ={()=>{setCount(0);setFood("Chicken"); setTarget(6)}}>CHICKEN</button>
<button onClick ={() => setIsListening(true)}>START BUTTON</button>

        </div>
        

    )
}
export {WhistleCounter}