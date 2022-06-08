const App = () => {
  const course = {
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'state of a component',
        exercises: 14
      }
    ]
  }
  
  const Part = (props) => {
    return (
      <div>
        {props.name} {props.exercises}
      </div>
    )
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.title}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
        <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
        <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
     <Header course = {course}/>
     <Content parts = {course.parts}/>
     <Total parts = {course.parts}/>
    </div>
  )
}

export default App
