import './button.scss'

const Button = ({ text, className }) => {
    return (
        <div>
            <button className={`btn ${className}`}>{text}</button>
        </div>
    )
}
export default Button;