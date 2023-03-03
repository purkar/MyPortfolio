import React from "react";
import { Icon } from "@iconify/react";
import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-gradient-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
								WANT TO DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY
								INBOX IS AlWAYS OPEN
							</p>
							<span style={{ display:'inline-flex', alignItems: 'center' }} >
							
							<div
													className="icon icon-lg icon-shape "
													
												>
													<Icon
														icon="material-symbols:call-sharp"
														data-inline="false"
													> </Icon>
													
												</div><h5 className="text-white">+15719924795</h5></span>
												
							
							<SocialLinks />
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
