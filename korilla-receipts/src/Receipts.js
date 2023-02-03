import React from "react";
import Receipt from "./Receipt";

function Receipts(props) {
    // console.log(props);
    const receipts = props.receipts.map((receipt, index) => {
        // console.log('receipt', receipt.order.sauce)
        if(receipt.paid) {
            return(
                <Receipt
                    key={index}
                    index={index}
                    person={receipt.person}
                    main={receipt.order.main}
                    protein={receipt.order.protein}
                    rice={receipt.order.rice}
                    sauce={receipt.order.sauce}
                    drink={receipt.order.drink}
                    cost={receipt.order.cost}
                />
                );
        } else {
            return <p>{receipt.person} Has not Paid Recipts</p>
        }

        });
        return receipts;
}

export default Receipts;