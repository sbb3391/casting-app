import './question.styles.scss'

const Question = ({text, responseType, name, ...otherProps}) => {

    switch(responseType) {
        case 'boolean':
            return(
                <div className='question'>
                    <div className='question-text'>
                        <span>{text}</span>
                    </div>
                    <div className='question-response'>
                        <div className='radio-group'>
                            <input type='radio' name={name} value={true}/>
                            <label>Yes</label>
                        </div>
                        <div className='radio-group'>
                            <input type='radio' name={name} value={false} />
                            <label>No</label>
                        </div>
                    </div>
                </div>

            )
        case 'string':
            return(
                <div className='question'>
                    <div className='question-text'>
                        <span>{text}</span>
                    </div>
                    <div className='question-response'>
                        <input type='text' />
                    </div>
                </div> 
            )
        case 'textarea':
            return(
                <div className='question'>
                <div className='question-text'>
                    <span>{text}</span>
                </div>
                <div className='question-response'>
                    <textarea rows="6"/>
                </div>
            </div> 
            )
        case 'number':
            return(
                <div className='question'>
                <div className='question-text'>
                    <span>{text}</span>
                </div>
                <div className='question-response'>
                    <input type='number' />
                </div>
            </div> 
            )
        default:
            return(
                <div className='question'>
                    <div className='question-text'>
                        <span>{text}</span>
                    </div>
                    <div className='question-response'>
                        <input type='text' />
                    </div>
                </div> 
            )
    }
}

export default Question;