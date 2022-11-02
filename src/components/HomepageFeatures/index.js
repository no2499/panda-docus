import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '電腦維修，線上填單，到府快速收送',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        線上填寫，專人馬上和您聯絡，了解您的需求<br></br> <a href="/pcrepair">[按我了解維修細節]</a>
      </>
    ),
  },
  {
    title: '全新電腦主機、零件',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我們有實體店面以及網路，皆可依照您的需求，幫您規劃以及向您報價，不論是線上或者實體店面購買皆有完整的售後服務<br></br> <a href="/pcbuy">[按我了解購買細節]</a>
      </>
    ),
  },
  {
    title: '二手回收、二手電腦買賣',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        若您有電腦想要回收，或者想要買賣二手電腦，我們可以線上先幫您粗估出一個金額，如果有意願會依照這個金額當基礎來進行後續買賣，完整買賣流程皆有實體及電子合約保障雙方權益，歡迎填單專人親切和您聯繫。<br></br> <a href="/twohand">[按我了解二手細節]</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
