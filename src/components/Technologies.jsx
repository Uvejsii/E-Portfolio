const Technologies = () => {

    const technologies = ['/logos/html-logo.png', '/logos/css-logo.png', '/logos/bootstrap-logo.png', '/logos/react-logo.webp', '/logos/vuejs-logo.png', '/logos/csharp-logo.png', '/logos/sql-logo.png']

    return (
        <div className="technologies-wrapper" id="technologies" data-section="true">
            <h1 className="text-light text-center mb-5">Technologies I Use</h1>
            <div className="technologies-container">
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