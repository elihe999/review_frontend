import React from "react"

function Lesson(props) {
    return (
        <div>{props.stage} -- {props.title}</div>
    );
}

const lessons = [
    {stage: "reer", title: "1"},
    {stage: "reer", title: "2"},
    {stage: "reer", title: "3"}
]

const withContent = Comp => props => {
    const content = lessons[props.idx]
    return <Comp {...content} />;
}

const LessonWithContext = withContent(Lesson)

//decorators-legacy
// @withContent
// class Lesson2 extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.stage} - {this.props.title}
//       </div>
//     );
//   }
// }

export default function HocText() {
    return (
        <div>
        {[0,0,0].map((item,idx) => (
            <LessonWithContext key={idx} idx={idx} />
        ))}
        </div>
    );
}
