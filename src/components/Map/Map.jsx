import "./Map.css";

const Map = ({ map }) => {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.094586703444!2d72.88578956426629!3d19.103506006073122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87204f8fcf1%3A0xd94fdf5e203c2ec2!2sMetro%20Station%20Saki%20Naka%2C%20Andheri%20-%20Ghatkopar%20Rd%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400072%2C%20India!5e0!3m2!1sen!2sbd!4v1663770651728!5m2!1sen!2sbd"
          width="100%"
          height="400"
          id="gmap_canvas"
          allowFullScreen=""
          loading="lazy"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
