import "./Skills.css";

const Skills = () => {
	return (
		<section className="skill-section">
			<h2>Languages I Speak {`{Fluently}`} </h2>
			<div className="toolkit">
				<div className="card-container">
					<div className="img-box">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="HTML"
						/>
					</div>
					<h3>
						<i className="bx bx-code bx-fade-left "></i>
						<i className="bx bx-code-alt bx-fade-right"></i>
					</h3>
				</div>

				<div className="card-container">
					<div className="img-box">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="HTML"
						/>
					</div>
					<h3>
						<i className="bx bx-code bx-fade-left "></i>
						<i className="bx bx-code-alt bx-fade-right"></i>
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Skills;
