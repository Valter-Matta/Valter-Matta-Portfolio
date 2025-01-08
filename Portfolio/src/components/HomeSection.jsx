import "./HomeSection.css";

const HomeSection = () => {
	return (
		<section className="home">
			<div className="home-content">
				<h1 className="font-bold">Hi, I'm Valter Matta</h1>
				<h3 className="text-3xl font-bold">Frontend developer</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
					pariatur, quas nobis modi atque, totam dolore facere autem minus
					doloremque eos culpa. Et rem officiis amet quisquam eius, quia vel
					pariatur soluta placeat optio perferendis maxime in dolor? Deleniti,
					quae perferendis. Nisi labore aliquid quas at sit eos dicta eligendi?
				</p>
				<div className="btn-box">
					<a>Hire Me</a>
					<a>Let's talk</a>
				</div>
			</div>
			<div className="home-icon-box">
				<a href="#">
					<i className="bx bxl-facebook-circle"></i>
				</a>
				<a href="#">
					<i className="bx bxl-instagram-alt"></i>
				</a>
				<a href="#">
					<i className="bx bxl-linkedin-square"></i>
				</a>
			</div>
			<div className="home-img">
				<div className="img-box">
					<div className="img-item">
						<img src="/foto3.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
