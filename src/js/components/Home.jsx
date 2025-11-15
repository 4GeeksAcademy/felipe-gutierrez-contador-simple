import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";



//create your first component 
const Home = (props) => {
	return (
		<div className="">
			<div className="row justify-content-center pe-4">
				<div className="col-lg-1 ">
					<button type="button" class="btn btn-lg btn-dark">

						<span class="badge badge-dark"><FontAwesomeIcon icon={faClock} /></span>
					</button>
				</div>
				<div className="col-lg-1 mx-5 ">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark ">{props.digitSix}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitFive}</span>
					</button>

				</div>
				<div className="col-lg-1 mx-5">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitFour}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitThree}</span>
					</button>

				</div>
				<div className="col-lg-1 mx-5">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitTwo}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitOne}</span>
					</button>

				</div>
			</div>
		</div>

	);
};

export default Home;