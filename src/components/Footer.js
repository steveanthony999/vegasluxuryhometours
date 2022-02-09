import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import IgLogo from '../assets/ig.png';

import './Footer.css';

const url =
  'https://lasvegasluxuryhometours.us14.list-manage.com/subscribe/post?u=4162acfdfb221e625d155873c&amp;id=9aa38a9c41';

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Footer = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <footer className='Footer ptb-84'>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div className='Footer-head'>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            {status === 'sending' && (
              <div style={{ color: 'blue' }}>sending...</div>
            )}
            {status === 'error' && (
              <div
                style={{ color: 'red' }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === 'success' && (
              <div style={{ color: 'green' }}>Subscribed !</div>
            )}
            <input type='text' placeholder='JOIN OUR MAILING LIST' />
            <motion.button
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.2,
                  type: 'spring',
                },
              }}
              className='btn-footer alfa-slab-one-18'
            >
              SUBSCRIBE
            </motion.button>
          </div>
        )}
      />
      <div className='Footer-body ptb-84'>
        <div className='Footer-body-left'>
          <h3 className='rajdhani-bold-18 text-white'>FOLLOW US!</h3>
          <a
            href='https://www.instagram.com/lasvegasluxuryhometours/'
            target='_blank'
            rel='noreferrer'
            className='mt-16'
          >
            <img src={IgLogo} alt='instagram' width='29px' />
          </a>
        </div>
        <div className='Footer-body-center'>
          <h3 className='rajdhani-bold-18 text-white'>COMPANY</h3>
          <Link to='/about' className='montserrat-light-14 text-white mt-16'>
            About
          </Link>
        </div>
        <div className='Footer-body-right'>
          <h3 className='rajdhani-bold-18 text-white'>SUPPORT</h3>
          <Link to='/contact' className='montserrat-light-14 text-white mt-16'>
            Contact
          </Link>
          <br />
          <Link to='/attributions' className='montserrat-light-14 text-white'>
            Attributions
          </Link>
        </div>
      </div>
      <div className='Footer-foot'>
        <p className='mt-32 montserrat-light-14 text-white'>
          COPYRIGHT &copy; 2021 {isMobile ? <br /> : '-'} VEGAS LUXURY HOME
          TOURS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
