import React from "react"
import { FacebookProvider,  Comments } from "react-facebook"

import config from '../../../data/SiteConfig'

const PostComments = props => {
    const { facebook, slug } = props;
  
    return (
      <div id="post-comments">
        <FacebookProvider appId="555701548185468">
          <Comments
            width="100%"
            href={`${config.siteUrl}${slug}`}
          />
        </FacebookProvider>
      </div>
    );
  };

  export default PostComments