import {useState, useEffect, useRef} from 'react';
import './App.css';
import clockFace from './ClockFace.png'
import arrow_H from './Arrow_H.png'
import arrow_M from './Arrow_M.png'
import arrow_S from './Arrow_S.png'

function App(){
  return (
    <>
      <h2>Spoiler(s)</h2>
      <Spoiler header={<h1>Заголовок</h1>} open>
        Контент 1
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler><br/>
      <Spoiler>
          <h2>Контент 2</h2>
          <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler><br/>
      <Spoiler header={<p>В фільмі "Шосте відчуття" персонаж Брюса Вілліса...</p>}>
        <p>надто багато часу проводить разом з чужою малолітньою дитиною </p>
      </Spoiler><br/>
      <Spoiler header={<p>В фільмі "Шосте відчуття" персонаж Брюса Вілліса...</p>} open>
        <p>надто багато часу проводить разом з чужою малолітньою дитиною </p>
      </Spoiler><br/><hr/>
      <h2>RangeInput</h2>
      <RangeInput min={2} max={10}/><br/><hr/>
      <h2>LoginForm</h2>
      <LoginForm onLogin = {myOnClick}/><br/><hr/>
      <h2>PasswordConfirm</h2>
      <PasswordConfirm min={2}/><br/><hr/>
      <h2>Timer</h2>
      <Timer time={31}/><br/><hr/>
      <h2>TimerControl</h2>
      <TimerControl/><br/><hr/>
      <h2>TimerContainer</h2>
      <TimerContainer seconds={3612} refresh={200} render={SecondsTimer}/><br/><hr/>
      <h2>LCD</h2>
      <TimerContainer seconds={3612} refresh={200} render={Timer2}/><br/><hr/>
      <h2>Watch</h2>
      <TimerContainer seconds={3612} refresh={200} render={Watch}/><br/><hr/><hr/>
      <h2>Watcher</h2>
      <Watcher render={Watch2}/><br/>
    </>
  )
}
export default App;

/*Spoiler ==== Реалізуйте компонент Spoiler, що приховує контент і відкриває його на кліку. Компонент отримуватиме 3 пропси:
                header, який виводиться завжди
                open, може бути true або false, якщо написати в JSX без значення, це означає open={true}
                вкладений контент, тобто children, який відображається у відкритому стані спойлера та не відображається у закритому
                Спочатку компонент має стан переданий через пропс open По кліку на <div> у якому відображатиметься header має 
                змінюватися стан на протилежне Забезпечте умову, яка показуватиме чи ні children.*/

const Spoiler = ({header="+", open, children}) => {
  const [spoilerState, setspoilerState] = useState(open)
  return (
      <div style={{border: `1px red solid`, backgroundColor: "#EEE"}} onClick={() => setspoilerState(!spoilerState)}>
          {header}
          {/*<button onClick={() => setOpen(!open)}> {open ? "Сховати спойлер" : "Показати спойлер"} </button>*/}
          {spoilerState && children}
      </div>
  )
}

/*RangeInput ==== Реалізувати компонент RangeInput, що відображає звичайний <input /> з наступними можливостями:
                    prop min - мінімальна довжина рядка в інпуті, якщо менше - інпут стає червоним
                    prop max - максимальна довжина рядка в інпуті, якщо більше - інпут стає червоним
                  Використовуйте компонент-клас та setState для відстеження та валідації довжини інпуту. Або useState*/

const RangeInput = ({min, max}) => {
  const [inputLength, setInputLength] = useState(0)
  let color
  if(inputLength < min || inputLength > max){
    color = "red"
  }else{
    color = "white"
  }    
  return (
    <div>      
      <input style={{backgroundColor : color}} onChange = {e => setInputLength((e.target.value).length)}/>
      <span>{inputLength}</span>
    </div>
  )
}

/*LoginForm: ==== приймає пропс-колбек (функцію) onLogin;
                  малює форму логіну (пару полів введення та кнопка "Login")
                  використовує state (2 штуки) - для логіну та пароля;
                  не дозволяє натиснути кнопку (disabled) поки логін/пароль відсутні (або можна додати 
                    якісь більш параноїдальні перевірки на довжину/набір символів;
                  при натисканні на кнопку запускає onLogin і передає в нього login та password із state;*/

const LoginForm = ({onLogin}) => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")  
  return (
    <div>      
      <input onChange = {e => setLogin(e.target.value)}/>
      <input onChange = {e => setPassword(e.target.value)}/>
      <button 
        disabled = {!(login.length && password.length)}
        onClick={x => onLogin({login, password})}
        >Увійти</button>
      {/*<br/><span>{login}</span><span>{" : "}</span><span>{password}</span>*/}
    </div>
  )
}

const myOnClick = (agr) =>{
  const {login, password} = agr
  console.log(login, password)
}

/**PasswordConfirm ==== Реалізувати компонент PasswordConfirm, що відображає два <input type='password'/> 
                        з наступними можливостями:
                          prop min - мінімальна довжина пароля
                          Використовуйте компонент-клас і setState для відстеження та валідації збігу паролів т
                            а перевірки на довжину. Або useState
                          За бажанням додайте хитріші валідації типу перевірки на розміри буків та наявність цифр у паролі.*/

const PasswordConfirm = ({min}) => {
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  let color
  if(password1.length < min || password2.length < min || password1 !==password2){
    color = "red"
  }else{
    color = "white"
  }
  return (
    <div>      
      <input type='password' style={{backgroundColor : color}} onChange = {e => setPassword1(e.target.value)}/><br/>
      <input type='password' style={{backgroundColor : color}} onChange = {e => setPassword2(e.target.value)}/>
      <br/><span>{password1 + " : " + password2}</span>
    </div>
  )
}

/**Timer ==== Напишіть компонент, який передається через props кількість секунд, а компонент при цьому реалізує зворотний 
              відлік раз на секунду зменшуючи кількість секунд на 1. Зупиняється на 0. Додайте в компонент кнопку паузи.
              Компонент повинен відображати години, хвилини та секунди.*/

const Timer = ({time}) => {
  const[timer, setTimer] = useState(time)
  const[isActive, setIsActive] = useState(true)
  const ref = useRef()
  const hours = Math.floor(timer / 3600)
  const minutes = Math.floor((timer - (hours * 3600)) / 60)
  const seconds = timer - (hours * 3600) - (minutes * 60)
  
  useEffect(() => {
    ref.current = setInterval(() => setTimer(timer => timer - 1), 1000)
    if(timer <= 0){
      setIsActive(false)
    }
    return () => {        
      clearInterval(ref.current)
    }
  }, [timer])

  useEffect(() => {
    if(!isActive){
      clearInterval(ref.current)
      ref.current = undefined
    }else{
      if(!ref.current){
        ref.current = setInterval(() => setTimer(timer => timer - 1), 1000)
      }
    }
  }, [isActive])

  return (
      <div>          
          <span>До вибуху лишилось: {hours} год. {minutes} хв. {seconds} сек.</span><br/>
          <button 
          disabled = {timer <= 0 }
          onClick={() => setIsActive(!isActive)}>
          {isActive ? "Ріжу червоний дріт!!!" : "Запускаю таймер знову"}</button>
      </div>
  )
}

/**TimerControl ==== Напишіть компонент, з трьома полями введення (годин, хвилин і секунд) і кнопкою Start, 
                      по якій стартуватиме компонент Timer */

const TimerControl = () => {
  const [hours, setHours] = useState("Введіть години")
  const [minutes, setMinutes] = useState("Введіть хвилини")
  const [seconds, setSeconds] = useState("Введіть сееунди")
  const [timer, setTimer] = useState(0)

  const h = Math.floor(timer / 3600)
  const m = Math.floor((timer - (h * 3600)) / 60)
  const s = timer - (h * 3600) - (m * 60)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(setTimer, 1000, timer - 1)
    }
  }, [timer])

  return(
    <div>
      <input placeholder='Введіть години' value={hours} onChange={e => setHours(e.target.value)}/><br/>
      <input placeholder='Введіть хвилини' value={minutes} onChange={e => setMinutes(e.target.value)}/><br/>
      <input placeholder='Введіть сееунди' value={seconds} onChange={e => setSeconds(e.target.value)}/><br/>
      <button        
        disabled = {!(Number.isInteger(+hours) && Number.isInteger(+minutes) && Number.isInteger(+seconds)//Перевірка, що всі є цілими числами
                    && +hours >= 0 && +minutes >= 0 && +seconds >= 0 && //Перевірка, що всі числа НЕ менші за нуль
                    (+hours > 0 || +minutes > 0 || +seconds > 0) && timer === 0 )} //Перевірка, щоб не запускати таймер на НУЛЬ секунд
        onClick={() => (setTimer(+hours * 3600 + +minutes * 60 + +seconds))}
      >FIRE!!!</button><br/>
      <span>До вибуху лишилось: {h} год. {m} хв. {s} сек.</span><br/>
      <span>{timer}</span><br/>
      {/*<span>{(Number.isInteger(+hours)).toString()}-{Number.isInteger(+minutes).toString()}-{Number.isInteger(+seconds).toString()}</span><br/>
      <span>{(+hours >= 0).toString()}-{(+minutes >= 0).toString()}-{(+seconds >= 0).toString()}</span><br/>
      <span>{(+hours > 0).toString()}-{(+minutes > 0).toString()}-{(+seconds > 0).toString()}</span><br/>*/}      
    </div>
  )
}

/**TimerContainer ==== Реалізуйте контейнерний компонент, який забезпечуватиме стан та логіку для будь-якого таймера:
                        TimerContainer повинен:
                          сприймати три пропси:
                          seconds - секунди для зворотного відліку
                          refresh - періодичність оновлення таймера у мілісекундах
                          render - компонент для відтворення, якому передається поточний час
                        Час обчислюється не за кількістю оновлень, а по різниці між стартовим та поточним моментом. Інакше таймер буде дуже неточним
                        бо JSX розуміє змінні з маленької літери не як компоненти-функції, а як теги HTML, перепривласніть props render у змінну з 
                        великої літери та використовуйте її в JSX, як ім'я компонента, передаючи пропс seconds.
                        SecondsTimer в даному випадку відіграє роль presentation компонента, який сам нічого не вміє робити, а просто є шаблоном для 
                        відображення своїх props у зручному для користувача вигляді.*/

const SecondsTimer = ({seconds}) => <h2>{seconds}</h2>  

const TimerContainer  = ({seconds=60, refresh=1000, render}) => {
  const Render = render
  const [timer, setTimer] = useState(seconds * 1000)
  const [timeNow, setTimeNow] = useState(performance.now())

  function timerHelper() {
    const realTime = performance.now()
    setTimer(timer => timer + (timeNow - realTime))
    setTimeNow(realTime)
  }

  useEffect(() => {
    //console.log('timeNow', timeNow)
    //console.log('timer', timer)
    const intervalId = setInterval(() => timerHelper(), refresh)    

    if(timer <= 0){
      clearInterval(intervalId)
    }
    return () => {
        //console.log('Очищення')
        clearInterval(intervalId)
    }
}, [timer])
  
  return(
    <Render seconds={timer/1000} />//Там ніби не вимагають виводити лише цілі секунди, тому я не округляв
  )
}

//LCD ==== Зробіть з компонента Timer presentation компонент без state, прикрутіть його до TimerContainer

const Timer2 = ({seconds}) => {  
  let time = seconds
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time - (hours * 3600)) / 60)
  const seconds_ = time - (hours * 3600) - (minutes * 60)
  return (
      <div>          
          <span>До вибуху лишилось: {hours} год. {minutes} хв. {Math.floor(seconds_)} сек.</span><br/>
      </div>
  )
}

/*const TimerContainer2  = ({seconds=60, refresh=1000, render}) => {
  const Render = render
  const [timer, setTimer] = useState(seconds * 1000)
  const [timeNow, setTimeNow] = useState(performance.now())

  function timerHelper() {
    const realTime = performance.now()
    setTimer(timer => timer + (timeNow - realTime))
    setTimeNow(realTime)
  }

  useEffect(() => {
    //console.log('timeNow', timeNow)
    //console.log('timer', timer)
    const intervalId = setInterval(() => timerHelper(), refresh)
    

    if(timer <= 0){
      clearInterval(intervalId)
    }
    return () => {
        //console.log('Очищення')
        clearInterval(intervalId)
    }
}, [timer])
  
  return(
    <Render time={timer/1000} />
  )
}*/

/*Watch ====  Реалізуйте годинник зі стрілками як presentation компонент:
                Квадратний блок-контейнер
                стрілки і, можливо, цифри позиціонуються за допомогою transform: rotate(УГОЛdeg)
                У верстці використовуйте position absolute для накладання блоків стрілок та цифр один на одного (це дасть загальний центр обертання)
                для коректного центру обертання блок зі стрілкою або цифрою має бути шириною з батьківський квадратний блок
                є ще всякий css (text-orientation) для обертання цифр усередині поверненого блоку*/

const Watch = ({seconds}) => {
  return(//Не звертайте уваги на стилі. Просто не захотів CSS додавати
    <div style={{height: "400px", overflow: "hidden"}}>
      <div style={{position: "relative", }} className='watchDiv'>
        <img style={{position: "absolute", }} className='clockFace' src={clockFace}/>      
        <img style={{position: "absolute", transform: `rotate(${(seconds / 3660) * 30}deg)`}} className='arrows arrow_H'src={arrow_H} />
        <img style={{position: "absolute", transform: `rotate(${(seconds / 60) * 6}deg)`}} className='arrows arrow_M' src={arrow_M}/>        
        <img style={{position: "absolute", transform: `rotate(${(seconds % 60) * 6}deg)`}} className='arrows arrow_S'src={arrow_S}/>
      </div>
    </div>
  )
}

//КІНЕЦЬ!








//Не звертайте уваги на те, що далі. Шкода було викидати :(

const Watch2 = ({time = new Date()}) => {
  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  const ms = time.getMilliseconds()

  return(
    <div style={{height: "400px", overflow: "hidden"}}>
      <div style={{position: "relative", }} className='watchDiv'>
        <img style={{position: "absolute"}} className='clockFace' src={clockFace}/>      
        <img style={{position: "absolute", transform: `rotate(${((h % 12) * 30) + (m * 0.5)}deg)`}} className='arrows arrow_H'src={arrow_H} />
        <img style={{position: "absolute", transform: `rotate(${(m * 6) + (s / 60 * 6)}deg)`}} className='arrows arrow_M' src={arrow_M}/>        
        <img style={{position: "absolute", transform: `rotate(${(s * 6) + (ms / 1000 * 6)}deg)`}} className='arrows arrow_S'src={arrow_S}/>
      </div>
    </div>
  )
}

const Watcher = ({render}) => {
  const[time, setTime] = useState(new Date())
  const Render = render
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 50)    
    return () => {      
      clearInterval(intervalId)
  }
  }, [])

  return(
    <Render time={time} />
  )
}