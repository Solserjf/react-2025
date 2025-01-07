import {FC, ReactNode} from 'react';


type MyComponentPropType = {title: string; children?: ReactNode};

const  MyComponent : FC<MyComponentPropType> = ({title, children}) => {
    return (<div className="text-3xl font-bold underline">
        <h2>{title}</h2>
        <p>{children}</p>
    </div>);
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