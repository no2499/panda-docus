import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '電腦維修，線上填單，到府快速收送',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        詳細說明，巴拉巴拉
      </>
    ),
  },
  {
    title: '電腦主機、零件：線上線下買賣',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        線上商場購買，線下實體店家服務，巴拉巴拉。
      </>
    ),
  },
  {
    title: '二手回收、二手電腦買賣聯盟',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        您有電腦想要回收，或者想要買賣二手電腦，歡迎填單專人親切和您聯繫。
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
