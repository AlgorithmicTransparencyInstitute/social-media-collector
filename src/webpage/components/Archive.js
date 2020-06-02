import React, { Fragment, useState } from 'react';

import ArchiveHeader from './archive/ArchiveHeader';
import ArchiveTabs from './archive/ArchiveTabs';
import ArchiveList from './archive/ArchiveList';
import ArchiveLoading from './archive/ArchiveLoading';
import ArchiveEmpty from './archive/ArchiveEmpty';
import Pagination from './archive/Pagination';

import useArchive from 'common/hooks/useArchive';
import { observedAtRecentFirst } from '../utils/sorts';
import classifyItems from '../utils/classifyItems';

import './Archive.less';

const buildPerms = JSON.parse(process.env.PERMISSIONS);

const ALL_TABS = {
  facebookAds: {
    label: 'Facebook Ads',
    permission: 'FB_SHARE_SPONSORED_POSTS'
  },
  facebookUserPosts: {
    label: 'Facebook User Posts',
    permission: 'FB_SHARE_PUBLIC_USER_POSTS'
  },
  facebookPagePosts: {
    label: 'Facebook Posts',
    permission: 'FB_SHARE_PUBLIC_PAGE_POSTS'
  },
  youtubeAds: {
    label: 'YouTube Ads',
    permission: 'YT_SHARE_ADS'
  },
  youtubeRecommendations: {
    label: 'YouTube Recommendations',
    permission: 'YT_SHARE_RECOMMENDED_VIDEOS'
  },
  youtubeVideos: {
    label: 'YouTube Videos',
    permission: 'YT_SHARE_WATCHED_VIDEOS'
  }
};
const TABS_IN_USE = Object.keys(ALL_TABS).reduce((acc, elem) => {
  const tab = ALL_TABS[elem];
  if (buildPerms[tab.permission]) acc[elem] = tab.label;
  return acc;
}, {});

const ITEMS_PER_PAGE = 10;

const paginate = (items, pageNumber) =>
  items.slice((pageNumber - 1) * ITEMS_PER_PAGE, pageNumber * ITEMS_PER_PAGE);

const Archive = () => {
  const firstAllowedTab = Object.keys(TABS_IN_USE)[0];

  const { items, index, oldest, loading } = useArchive();
  const [activeTab, setActiveTab] = useState(firstAllowedTab);
  const [currentPage, setCurrentPage] = useState(1);

  if (!index.length) return loading ? <ArchiveLoading /> : <ArchiveEmpty />;
  const classified = classifyItems(items);

  const tabs = Object.keys(TABS_IN_USE).reduce((acc, elem) => {
    acc.push({
      name: elem,
      label: TABS_IN_USE[elem],
      active: elem === activeTab,
      badge: classified[elem].length
    });
    return acc;
  }, []);

  const sortedItems = [...classified[activeTab]].sort(observedAtRecentFirst);
  const pages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE) /* istanbul ignore next */ || 1;
  const pagedItems = paginate(sortedItems, currentPage);

  /* istanbul ignore next */
  const changeTab = tab => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <Fragment>
      <ArchiveHeader count={index.length} since={new Date(oldest)} />
      <ArchiveTabs tabs={tabs} onChange={changeTab} />
      <ArchiveList items={pagedItems} />
      <Pagination pages={pages} currentPage={currentPage} onChange={setCurrentPage} />
    </Fragment>
  );
};
Archive.displayName = 'Archive';

export default Archive;
