import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

    const onClick = () => {
        console.log('Clicked')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color='steelblue' text='Add' />
        </header>
    )
}

Header.defaulProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Header
