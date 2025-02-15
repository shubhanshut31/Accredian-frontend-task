import React from "react";
import "../styles/referbenefits.css";

function ReferralBenefits() {
    return (
        <section className="refer-benefits">
            <h2>Referral Benefits</h2>
            <table className="benefits-table">
                <thead>
                    <tr>
                        <th>Program</th>
                        <th>Referrer Bonus</th>
                        <th>Referee Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product Management</td>
                        <td>Rs. 7,000</td>
                        <td>Rs. 7,000</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default ReferralBenefits;