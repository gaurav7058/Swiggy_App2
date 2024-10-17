import React, { useEffect, useState } from 'react';
import { Menu_API } from "./Constant";
import { useParams } from 'react-router-dom';
import SubMenu from './SubMenu';
import '../Styles/MenuItem.css'; // Importing a CSS file for MenuItem styles

export default function MenuItem() {
  const { resId } = useParams();
  const [menuItem, setMenuItem] = useState([]);
  const [sortedMenuItem, setSortedMenuItem] = useState([]);
  const [firstItem, setFirstItem] = useState([]);
  const [lastFourItem, setLastFourItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(Menu_API + resId);
        const json = await data.json();

        // Extract the menu items from the API response
        const items = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1, -2);
        setMenuItem(items);

        // Get the first and last four items
        setFirstItem(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1, 2));
        setLastFourItem(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(-4, -2));
      } catch (error) {
        console.log("error", error);
      }
    };

    getData();
  }, [resId]);

  useEffect(() => {
    // Set sortedMenuItem when firstItem and lastFourItem change
    if (firstItem.length && lastFourItem.length) {
      setSortedMenuItem([...firstItem, ...lastFourItem]);
    }
  }, [firstItem, lastFourItem]);

  return (
    <div className="menu-item-container">
      {sortedMenuItem.map((item, index) => (
        <SubMenu key={index} obj={item} />
      ))}
    </div>
  );
}
