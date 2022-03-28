import React from "react";
import { PROMOTION } from "helpers/const";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import SectionTitle from "components/SectionTitle";



/**Promotion section */

const Promotion = (): JSX.Element => (
    <section id="promotion" className="promotion">
        <div className="container">
            <div className="w-100">
                <SectionTitle icon={["fas", "bullhorn"]} title="Nos promotions du jour!" />
                <p className="tx-j">
                    En ce moment chez Aventure Couture : achetez une <Icon className="icon__star" icon={["fas", "star"]} /><span className="bold">{PROMOTION.description}</span><Icon className="icon__star" icon={["fas", "star"]} />
                    à partir de <Icon className="icon__price" icon={["fas", "money-bill-wave"]} /> <span className="price">{PROMOTION.price}</span> <Icon className="icon__price" icon={["fas", "money-bill-wave"]} /> !
                </p>
            </div>
        </div>
    </section>
);

export default Promotion;
