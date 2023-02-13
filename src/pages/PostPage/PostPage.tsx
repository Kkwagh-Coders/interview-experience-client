import React, { useState } from 'react';
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiTwotoneStar,
} from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';

import { MdOutlineContentCopy } from 'react-icons/md';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import { TiArrowForwardOutline } from 'react-icons/ti';
import styles from './PostPage.module.css';

function PostPage() {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);

  const toggleComment = () => {
    setIsCommentExpanded(!isCommentExpanded);
  };

  return (
    <div className={styles.PostPage}>
      <div className={`container ${styles.container}`}>
        <div className={styles.post}>
          <div className={styles.title}>
            <h2>React Interview</h2>
          </div>
          <div className={styles.postContent}>
            <div className={styles.userDetails}>
              <div className={styles.userName}>dhruv10i</div>
              <div className={styles.like}>322 </div>
              <div className={styles.date}>jan 12 2023</div>
            </div>

            <div className={styles.data}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque
              assumenda corrupti, placeat quia fugit ea eveniet, adipisci
              officia, qui cumque dolores officiis laudantium at. Sunt, modi
              alias. Sed ab, sint tenetur, quidem possimus libero nihil eveniet
              impedit assumenda, eos deserunt. Nobis ab dolores magni corporis
              nisi aperiam laudantium at molestias nihil fugiat. Aut modi
              deleniti iste, eaque, exercitationem, perspiciatis at soluta
              dolorem facilis aperiam facere alias sunt. Aspernatur natus a
              dolore facilis doloremque quis nostrum, eveniet odio omnis! A
              ducimus facilis temporibus incidunt ea in aperiam, alias tempore
              cum nulla voluptatibus consequuntur ipsam nobis inventore ab at
              reiciendis officiis exercitationem neque deserunt! Laudantium
              temporibus voluptates possimus odio delectus nihil ex quia quam
              porro aliquam omnis neque quo laboriosam sint necessitatibus
              assumenda exercitationem animi quas quasi ipsum, aut illum!
              Facilis, beatae dicta eos vero nobis illo nam vel ad earum
              voluptates, voluptas sit quod incidunt blanditiis totam laborum
              ducimus culpa, commodi quis nostrum odit quaerat. Voluptatum nam
              assumenda, sint at perferendis aut similique, sapiente,
              dignissimos delectus adipisci porro facere deserunt ullam alias
              soluta totam aspernatur fugit. Ipsum et sed dolor rem rerum
              praesentium at optio neque ad amet mollitia est eos, nisi itaque
              deleniti, perspiciatis culpa a quaerat necessitatibus. Tempore.
            </div>

            <div className={styles.postDetails}>
              <div className={styles.upvote}>322 </div>
              <div className={styles.share}>share</div>
              <div className={styles.favourite}>favoutite</div>
            </div>

            <div className={styles.postDetails}>
              <div className={styles.comments}>Comments (10)</div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Sort By</option>
                    <option value="2">Newest</option>
                    <option value="3">Oldest</option>
                    <option value="4">Top Voted</option>
                  </select>
                </label>
              </div>
            </div>

            <div className={styles.commentBox}>
              <h4>Type comment here...</h4>
              <div className={styles.postDetails}>
                <div className={styles.inline}>322 </div>
                <div className={styles.link}>share</div>
                <div className={styles.atRate}>
                  <AiTwotoneStar />
                  <div className={styles.atRateText}>favoutite </div>
                </div>
                <button type="button" className={styles.submitComment}>
                  Comment
                </button>
              </div>
            </div>
            <div className={styles.commentList}>
              <ul>
                <li>
                  <div className={styles.cmt}>
                    <div className={styles.cmtHead}>
                      <p className={styles.uName}>shuaan1010</p>
                      <p className={styles.date}>jan 03 2023</p>
                    </div>
                    <div className={styles.cmtData}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque quos, consequatur suscipit at illum in ea. Tempore
                      animi facilis reprehenderit.
                    </div>
                    <div className={styles.cmtFoot}>
                      <div className={styles.afterBtns}>
                        <div className={styles.votes}>
                          <div className={styles.upVote}>
                            <AiOutlineArrowUp />
                          </div>
                          <div className={styles.vote}>10</div>
                          <div className={styles.dwnVote}>
                            <AiOutlineArrowDown />
                          </div>
                        </div>
                        <div className={styles.comments}>
                          <div className={styles.cLogo}>
                            <FaRegComments onClick={toggleComment} />
                            <button
                              type="button"
                              onClick={toggleComment}
                              className={styles.replyBtn}
                            >
                              reply
                            </button>
                          </div>
                        </div>
                        <div className={styles.forward}>
                          <TiArrowForwardOutline />
                        </div>
                        <div className={styles.copy}>
                          <MdOutlineContentCopy />
                        </div>
                      </div>
                      {isCommentExpanded ? (
                        <div className={styles.innerCmt}>
                          <ul>
                            <li>
                              <div className={styles.nestedComment}>
                                <div className={styles.nCmtHead}>
                                  <p className={styles.nUName}>shuaan1010</p>
                                  <p className={styles.nDate}>jan 03 2023</p>
                                </div>
                                <p className={styles.nestedCmtData}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Et, omnis.
                                </p>
                              </div>
                              <div className={styles.nAfterBtns}>
                                <div className={styles.nVotes}>
                                  <div className={styles.nUpVote}>
                                    <AiOutlineArrowUp />
                                  </div>
                                  <div className={styles.nUote}>10</div>
                                  <div className={styles.nDwnVote}>
                                    <AiOutlineArrowDown />
                                  </div>
                                </div>
                                <div className={styles.nReply}>
                                  <div className={styles.nRLogo}>
                                    <FaRegComments />
                                  </div>
                                  <div className={styles.nRText}>reply</div>
                                </div>

                                <div className={styles.nShare}>
                                  <div className={styles.nSLogo}>
                                    <FiShare />
                                  </div>
                                  <div className={styles.nSText}>Share</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className={styles.nestedComment}>
                                <div className={styles.nCmtHead}>
                                  <p className={styles.nUName}>shuaan1010</p>
                                  <p className={styles.nDate}>jan 03 2023</p>
                                </div>
                                <p className={styles.nestedCmtData}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Et, omnis.
                                </p>
                              </div>
                              <div className={styles.nAfterBtns}>
                                <div className={styles.nVotes}>
                                  <div className={styles.nUpVote}>
                                    <AiOutlineArrowUp />
                                  </div>
                                  <div className={styles.nUote}>10</div>
                                  <div className={styles.nDwnVote}>
                                    <AiOutlineArrowDown />
                                  </div>
                                </div>
                                <div className={styles.nReply}>
                                  <div className={styles.nRLogo}>
                                    <FaRegComments />
                                  </div>
                                  <div className={styles.nRText}>reply</div>
                                </div>

                                <div className={styles.nShare}>
                                  <div className={styles.nSLogo}>
                                    <FiShare />
                                  </div>
                                  <div className={styles.nSText}>Share</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.cmt}>
                    <div className={styles.cmtHead}>
                      <p className={styles.uName}>Vinay100110</p>
                      <p className={styles.date}>jan 03 2023</p>
                    </div>
                    <div className={styles.cmtData}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque quos, consequatur suscipit at illum in ea. Tempore
                      animi facilis reprehenderit.
                    </div>
                    <div className={styles.cmtFoot}>
                      <div className={styles.afterBtns}>
                        <div className={styles.votes}>
                          <div className={styles.upVote}>
                            <AiOutlineArrowUp />
                          </div>
                          <div className={styles.vote}>10</div>
                          <div className={styles.dwnVote}>
                            <AiOutlineArrowDown />
                          </div>
                        </div>
                        <div className={styles.comments}>
                          <div className={styles.cLogo}>
                            <FaRegComments />
                            <button
                              type="button"
                              onClick={toggleComment}
                              className={styles.replyBtn}
                            >
                              reply
                            </button>
                          </div>
                        </div>
                        <div className={styles.forward}>
                          <TiArrowForwardOutline />
                        </div>
                        <div className={styles.copy}>
                          <MdOutlineContentCopy />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.cmt}>
                    <div className={styles.cmtHead}>
                      <p className={styles.uName}>Vinay100110</p>
                      <p className={styles.date}>jan 03 2023</p>
                    </div>
                    <div className={styles.cmtData}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque quos, consequatur suscipit at illum in ea. Tempore
                      animi facilis reprehenderit.
                    </div>
                    <div className={styles.cmtFoot}>
                      <div className={styles.afterBtns}>
                        <div className={styles.votes}>
                          <div className={styles.upVote}>
                            <AiOutlineArrowUp />
                          </div>
                          <div className={styles.vote}>10</div>
                          <div className={styles.dwnVote}>
                            <AiOutlineArrowDown />
                          </div>
                        </div>
                        <div className={styles.comments}>
                          <div className={styles.cLogo}>
                            <FaRegComments />
                            <button
                              type="button"
                              onClick={toggleComment}
                              className={styles.replyBtn}
                            >
                              reply
                            </button>
                          </div>
                        </div>
                        <div className={styles.forward}>
                          <TiArrowForwardOutline />
                        </div>
                        <div className={styles.copy}>
                          <MdOutlineContentCopy />
                        </div>
                        <div className={styles.more}>
                          <div className={styles.mLogo}>
                            <BiDotsHorizontalRounded />
                          </div>
                          <div className={styles.report}>Report</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li> </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.dataCard}>
            <ul>
              <li>
                <div className={styles.dataListItem}>
                  Comments
                  <span> 24 </span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Favourited
                  <span>21</span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Views
                  <span>24k</span>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.related}>
            <p>Related</p>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
