import React from "react";
import "../styles/Body.scss";
import heroBackground from "../images/hero-background.jpg";
import headshot from "../images/headshot.jpg";

export const Body = () => {
    console.log(heroBackground)
  return (
    <div className="body">
      <div className="body__top">
        <div className="body__top--image">
          <img scr={heroBackground} alt="lake" />
        </div>
      </div>
      <div className="body__bottom">
        <div className="body__bottom--left">
          <div className="body__bottom--profile">
            <img scr={headshot} alt="headshot" />
          </div>
        </div>
        <div className="body__bottom--right">
          <h2 className="body__bottom--title">A little about me</h2>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Fusce dapibus, tellus
            ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed posuere consectetur est at lobortis. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed
            posuere consectetur est at lobortis.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Donec id elit non mi
            porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare
            sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
            at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros.
          </p>
          <p>
            Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Nulla vitae elit libero, a
            pharetra augue. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
            quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in,
            egestas leget quam. Donec sed odio dui. Nulla vitae elit libero, a
            pharetra augue. Integer posuere erat a ante venenatis dapibus
            posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Curabitur blandit tempus
            porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </div>
      </div>
    </div>
  );
};
