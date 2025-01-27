import styles from './Parallax.module.css'
import  React, { useEffect } from 'react';
import Script from 'next/script'
const Index = () => {
   
return (<>
<div><Script src="/scripts/parallax.js" strategy="lazyOnload"></Script></div>

<section className={`${styles.content}`}>
	<h1>
		SCROLL DOWN
		<svg className={`${styles.iconArrow} ${styles.animateDown}`} xmlns="http://www.w3.org/2000/svg" width="8" height="40">
			<polygon className="arrow" points="4,40 0,36 3,36 3,0 5,0 5,36 8,36"/>
			<polygon className="arrow" points="4,-20 0,-24 3,-24 3,-60 5,-60 5,-24 8,-24"/>
		</svg>
	</h1>
</section>
<div  className={styles.content} data-action="parallax" data-parallax-distance="140px" data-parallax-direction="follow">
	<div  className={styles.backgroundText}>A</div>
	<div className={styles.text}>
		<h1  className={styles.line} >Overskrift</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis vitae purus sit amet viverra. Nulla facilisi. Nulla fermentum diam non mi auctor, sed euismod lorem euismod. Vivamus luctus magna non quam molestie ornare. Aliquam rhoncus tempus nibh. Curabitur efficitur iaculis urna vel laoreet. Quisque ut tempor elit, ut cursus lorem. Mauris sagittis urna ligula, convallis tincidunt elit efficitur vel. Integer blandit faucibus sem, id semper erat faucibus sit amet. Phasellus luctus sapien nec tortor lacinia, ac luctus tellus finibus. In ultricies hendrerit mattis. Aenean in leo ut ipsum volutpat volutpat.</p>
		<p><a href="#"  className={styles.button}>Read more</a></p>
	</div>
	<div className={`${styles.imageWrap} ${styles.right}`}>
		<div  className={styles.shadow}  data-action="parallax-child" data-distance="200%" data-friction="1.2" data-parallax-direction="follow"></div>
		<div  className={styles.image}  data-action="parallax-child" data-distance="200%" data-friction="1" data-parallax-direction="follow">
			<img width="1600" height="900" />
		</div>
	</div>
</div>
<div className="content" data-action="parallax" data-parallax-distance="140px" data-parallax-direction="follow">
	<div className="background-text">B</div>
	<div className="image-wrap left">
		<div className="shadow"></div>
		<div className="image">
			<img width="1600" height="900" />
		</div>
	</div>
	<div className="text">
		<h1 className="line">Overskrift</h1>
		<p>Fusce sapien sapien, commodo eu est id, dapibus maximus eros. Nullam sed quam sit amet risus venenatis molestie. Ut ullamcorper urna vel elit efficitur dignissim. Sed ac est viverra, vulputate dui ac, semper metus. Nunc venenatis tellus at justo lobortis tincidunt. Sed imperdiet accumsan dolor. Morbi sagittis, nunc vitae ultricies interdum, ligula arcu pharetra dolor, in auctor magna neque ut velit. Vivamus consequat dolor in enim convallis elementum. Pellentesque sed velit semper nisi convallis sollicitudin et a ante. Proin iaculis augue quis dolor consectetur dictum.</p>
		<p><a href="#" className="button">Read more</a></p>
	</div>
</div>
<div className="content" data-action="parallax" data-parallax-distance="140px" data-parallax-direction="follow">
	<div className="background-text">C</div>
	<div className="text">
		<h1 className="line">Overskrift</h1>
		<p>Phasellus bibendum purus mi, id ultrices nibh faucibus congue. Proin rutrum nunc vel ex dictum blandit. Phasellus posuere et velit ac ultricies. Phasellus ipsum ante, viverra vitae purus et, vestibulum dignissim odio. Duis purus lectus, placerat non interdum nec, consequat ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id porta metus. Sed vel felis at mi vestibulum sodales. Nulla quis tortor turpis.</p>
		<p><a href="#" className="button">Read more</a></p>
	</div>
	<div className="image-wrap right alt">
		<div className="image">
			<img width="900" height="1600"  />
		</div>
	</div>
</div>
<div className="content" data-action="parallax" data-parallax-distance="140px" data-parallax-direction="follow">
	<div className="background-text">D</div>
	<div className="image-wrap left alt">
		<div className="image">
			<img width="900" height="1600"  />
		</div>
	</div>
	<div className="text">
		<h1 className="line">Overskrift</h1>
		<p>Integer et magna nec lorem lobortis iaculis a at nibh. Integer euismod condimentum nisl vitae ornare. Phasellus ultrices elit metus. Integer elementum sem bibendum, semper velit sit amet, fermentum dolor. Pellentesque vel cursus nisi, eget faucibus turpis. Ut efficitur sagittis egestas. Morbi condimentum vestibulum erat, et placerat turpis efficitur id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed at bibendum justo. Aliquam molestie lacinia purus, at aliquet lorem mattis a. Suspendisse malesuada bibendum est et blandit. Fusce ac justo id sapien tincidunt rhoncus vel id lectus. Vestibulum eget congue velit. Mauris augue sapien, pharetra sed ipsum vitae, scelerisque fringilla leo. Fusce iaculis nulla felis, varius lacinia enim dapibus eu. Proin non bibendum nisl.</p>
		<p><a href="#" className="button">Read more</a></p>
	</div>
</div>
<section className="content">
	<h1>
		<svg className="icon-arrow animate-up" xmlns="http://www.w3.org/2000/svg" width="8" height="40">
			<polygon className="arrow" points="4,0 8,4 5,4 5,40 3,40 3,4 0,4"/>
			<polygon className="arrow" points="4,60 8,64 5,64 5,100 3,100 3,64 0,64"/>
		</svg>
		SCROLL UP
	</h1>
</section>
</>)
}

export default Index;