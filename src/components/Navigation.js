import React from 'react';
import classes from '../styles/common.css';

const Navigation = ({ items }) => {
    const getLink = (item) => {
        if (!item || !item.url || !item.title) {
            return;
        }

        return <a className={classes.nav_item} href={ item.url }>{ item.title }</a>;
    }

    const getRecursiveNavigationContent = (item) => {
        if (!item || !item.url) {
            return;
        }

        let childItems;

        if (item.children && item.children.length) {
            childItems = <ul>
                { item.children && item.children.map((childItem) => {
                    return getRecursiveNavigationContent(childItem);
                })
                }</ul>;
        }

        return <li key={ item.url }>
            {getLink(item)}
            {childItems}
        </li>;
    }

    return (
        <header>
            <nav>
                <ul className={classes.nav_container}>
                    { items && items.map((item) =>
                        getRecursiveNavigationContent(item))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
