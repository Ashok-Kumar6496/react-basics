import './App.css';
import EffectAxiosHook2 from './components/hooks/EffectAxiosHook2';
import EffectHookAxios from './components/hooks/EffectHookAxios';
import EffectHookCounter from './components/hooks/EffectHookCounter';
// import AxiosGet from './components/AxiosGet';
// import AxiosPostForm from './components/AxiosPostForm';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import Forms from './components/Forms';
// import GreetComponent from './components/Greet';
import HookCounter from './components/hooks/HookCounter';
import HookCounterTwo from './components/hooks/HookCounterTwo';
import HookStateWithArray from './components/hooks/HookStateWithArray';
import HookStateWithObject from './components/hooks/HookStateWithObject';
// import LifeCycleA from './components/life cycle methods/LifeCycleA';
// import NameList from './components/NameList';
// import StyeleSheets from './components/StyeleSheets';
// import UserGreeting from './components/UserGreeting';
// import Welcome from './components/Welcome';

function App() {
    return (
        <div className="App">
            {/* <GreetComponent name="Ashok Kumar" heroName="A" >
        <p>This is a children prop</p>
      </GreetComponent>
      <GreetComponent name="Priyanka" heroName='B'>
        <button>Action</button>
      </GreetComponent>
      <GreetComponent name="Kitty" heroName='C' >
        <input />
      </GreetComponent>
      <Welcome name="Kitty" heroName='C'>
        <button>Action2</button>
      </Welcome> */}
            {/* <Welcome name="Priyanka" heroName='B' /> */}
            {/* <Counter /> */}
            {/* <EventBind /> */}
            {/* <UserGreeting /> */}
            {/* <NameList /> */}
            {/* <StyeleSheets/> */}
            {/* <Forms/> */}
            {/* <LifeCycleA/> */}
            {/* <AxiosGet/> */}
            {/* <AxiosPostForm/> */}
            {/* **************************Above are fundamentals and below are hook concepts************************* */}
            {/* <HookCounter/> */}
            {/* <HookCounterTwo/> */}
            {/* <HookStateWithObject/> */}
            {/* <HookStateWithArray/> */}
            {/* <EffectHookCounter/> */}
            {/* <EffectHookAxios/> */}
            <EffectAxiosHook2/>
        </div>
    );
}

export default App;
