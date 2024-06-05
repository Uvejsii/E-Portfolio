const Technologies = () => {

    const technologies = ['/html-logo.png', '/css-logo.png', '/bootstrap-logo.png', '/react-logo.webp', '/vuejs-logo.png', '/csharp-logo.png', '/sql-logo.png']

    return (
        <div className="technologies-container my-5" id="technologies" data-section="true">
            <h1 className="text-light text-center mb-4">Technologies I Use</h1>
                <div className="technologies-container pt-3">
                    <div className="d-flex flex-wrap justify-content-center gap-5">
                        {technologies.map((item) => (
                            <img key={item} src={item} alt="technology-logo" className="techno-image p-3"/>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default Technologies;