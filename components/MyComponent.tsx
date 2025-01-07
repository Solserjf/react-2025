import {FC} from 'react';
import './MyComponent.css';

type MyComponentPropType = {text: string};

const  MyComponent : FC<MyComponentPropType> = ({text}) => {
    return (<div className={'target'}>{text}</div>);
};

export default MyComponent;


// нижче показаний модульний варіант імпорту css
// import {FC} from 'react';
// import styles from './MyComponent.module.css';
//
// type MyComponentPropType = {text: string};
//
// const  MyComponent : FC<MyComponentPropType> = ({text}) => {
//     return (<div className={styles.target}>{text}</div>);
// };
//
// export default MyComponent;