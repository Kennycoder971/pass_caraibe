import React, { useState } from "react";
import CountField from "./CountField";
import DrowpdownField from "./DrowpdownField";
import DrowpdownChild from "./DrowpdownChild";

export default function BookForm() {
  function submitForm(e) {}

  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [dayCount, setDayCount] = useState(0);
  const [total, setTotal] = useState(190);

  const incrementCount = (itemCount, setCount) => {
    return (e) => {
      e.preventDefault();
      setCount(itemCount + 1);
    };
  };

  const decrementCount = (itemCount, setCount, minAmount = 0) => {
    return (e) => {
      e.preventDefault();
      if (itemCount > minAmount) {
        setCount(itemCount - 1);
      }
    };
  };

  return (
    <form className="book-form" onSubmit={submitForm}>
      <CountField
        itemName="Adulte"
        itemCount={adultsCount}
        incrementCount={incrementCount(adultsCount, setAdultsCount)}
        decrementCount={decrementCount(adultsCount, setAdultsCount, 1)}
      />
      <CountField
        itemName="Enfant"
        itemCount={childrenCount}
        incrementCount={incrementCount(childrenCount, setChildrenCount)}
        decrementCount={decrementCount(childrenCount, setChildrenCount)}
      />
      <DrowpdownField itemName="Pass" total={total.toFixed(2)}>
        <DrowpdownChild>
          <CountField
            itemName="ADULTE"
            itemCount={adultsCount}
            incrementCount={incrementCount(adultsCount, setAdultsCount)}
            decrementCount={decrementCount(adultsCount, setAdultsCount, 1)}
          />
        </DrowpdownChild>
      </DrowpdownField>

      <DrowpdownField itemName="Soumettre">
        <DrowpdownChild total={total.toFixed(2)}>
          <CountField
            itemName="ADULTE"
            itemCount={adultsCount}
            incrementCount={incrementCount(adultsCount, setAdultsCount)}
            decrementCount={decrementCount(adultsCount, setAdultsCount, 1)}
          />
          <CountField
            itemName="ENFANT"
            itemCount={childrenCount}
            incrementCount={incrementCount(childrenCount, setChildrenCount)}
            decrementCount={decrementCount(childrenCount, setChildrenCount)}
          />

          <CountField
            itemName="JOURS"
            itemCount={dayCount}
            incrementCount={incrementCount(dayCount, setDayCount)}
            decrementCount={decrementCount(dayCount, setDayCount)}
          />
          <button type="submit" className="arrow-btn btn">
            Valider mon panier
          </button>
        </DrowpdownChild>
      </DrowpdownField>
    </form>
  );
}
