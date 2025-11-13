import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";



//create your first component
const Home = (props) => {
	return (
		<div className="">
			<div className="row  row-gap-5 column-gap-5" >

				<div className="Logo col-lg-1 ms-4">
					<button type="button" class="btn btn-lg btn-dark">

						<span class="badge badge-dark"><FontAwesomeIcon icon={faClock} /></span>
					</button>
				</div>
				<div className="col-lg-1 ms-2">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark ">{props.digitSix}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitFive}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitFour}</span>
					</button>

				</div>
				<div className="col-lg-1">
					<button type="button" class="btn btn-lg btn-dark">
						<span class="badge badge-dark">{props.digitThree}</span>
					</button>

				</div>
				<div className="col-lg-1">
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