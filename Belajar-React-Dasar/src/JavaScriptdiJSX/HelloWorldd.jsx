


export default function HelloWorldd() {
    
    return (
        <>
            <Header />
            <Paragrap />
            <Paragrap />
        </>
    )
}

function Header() {

    const header = "Hello World"

    return (
        <h1 style={{ color: 'red', backgroundColor: 'black', padding: '10px' }}>
            {header.toUpperCase()}
        </h1>
    )
}

function Paragrap() {

    const paragrap = "Paragrap Hello World"
    
    const style = {
        color: 'blue',
        backgroundColor: 'yellow',
        padding: '10px'
    }

    return (
        <p style={style}>
            {paragrap.toUpperCase()}
        </p>
    )
}