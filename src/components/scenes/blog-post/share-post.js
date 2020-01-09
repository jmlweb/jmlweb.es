import React from 'react';
import {
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

import styles from './share-post.module.css';

const ICON_SIZE = 36;

const SharePost = ({ postUrl, postTitle, postSubtitle, siteUrl, tags }) => (
  <div className={styles.wrapper}>
    {/* <span className={styles.text}>Share post</span> */}
    <TwitterShareButton url={postUrl} title={postTitle} via="jmlweb">
      <TwitterIcon size={ICON_SIZE} />
    </TwitterShareButton>
    <LinkedinShareButton
      url={postUrl}
      title={postTitle}
      summary={postSubtitle}
      source={siteUrl}
    >
      <LinkedinIcon size={ICON_SIZE} />
    </LinkedinShareButton>
    <FacebookShareButton url={postUrl} quote={postTitle} hashtag={tags}>
      <FacebookIcon size={ICON_SIZE} />
    </FacebookShareButton>
    <TelegramShareButton url={postUrl} title={postTitle}>
      <TelegramIcon size={ICON_SIZE} />
    </TelegramShareButton>
    <WhatsappShareButton url={postUrl} title={postTitle}>
      <WhatsappIcon size={ICON_SIZE} />
    </WhatsappShareButton>
  </div>
);

export default SharePost;
