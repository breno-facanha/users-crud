export default function Input(props){
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id}>{props.name}</label>
            <input id={props.id} type={props.tipo} placeholder={props.placeholder} className="border border-gray-300 px-1"/>
        </div>
    )
}