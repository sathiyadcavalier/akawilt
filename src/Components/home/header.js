import ReactTypingEffect from 'react-typing-effect';

export default function TypingEffect() {

    return (
        <>

            <ReactTypingEffect
                text={["Hi I'm, WILT AKA Sathiyaseelan Ravi", "Self Made FrontEnd Developer",
                    "Experts in responsive Web Design and analyzing and fixing UI bugs quickly."]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <h1>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        style={i % 2 === 0 ? { color: 'tomato' } : {}}
                                    >{char}</span>
                                );
                            })}
                        </h1>
                    );
                }}

                eraseDelay="2000ms"
                typingDelay="500ms"
            />




        </>
    )
}