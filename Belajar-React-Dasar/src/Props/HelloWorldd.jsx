export default function HelloWorldd() {
    
    const props = {
        text: "Hello World"
    }

    const props2 = {
        text: "Paragrap Hello World"
    }

    return (
        <>
            <HeaderHelloWorld {...props}/>
            <Paragrap {...props2}/>
            <Paragrap {...props2}/>
        </>
    )
}

function HeaderHelloWorld({text="Ups, lupa kasih text"}) {

    const style = {
        color: 'red',
        backgroundColor: 'blue',
        padding: '10px'
    }

    return (
        <h1 style={style}>
            {text.toUpperCase()}
        </h1>
    )
}

function Paragrap({text="Ups, lupa kasih text"}) {

    const style = {
        color: 'blue',
        backgroundColor: 'aqua',
        padding: '10px'
    }

    return (
        <p style={style}>
            {text.toUpperCase()}
        </p>
    )
}