import type { PostHideElements } from '~/content/config';

export const Site = 'https://www.jason-z.com';
export const SiteLanguage = 'zh';
export const SiteTitle = '张晓刚';
export const SiteDescription = '一个技术爱好者。';
export const FooterDescription = '一个技术爱好者。';
export const AdminName = '张晓刚';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:ccnuzxg@gmail.com' },
	github: { url: 'https://github.com/jasonz1987' },
	x: { url: 'https://x.com/xiaogangzhang66' },
	// mastodon: { url: 'https://mastodon.social/@userName' },
	// facebook: { url: 'https://facebook.com/userName' },
	// instagram: { url: 'https://instagram.com/userName' },
	// telegram: { url: 'https://t.me/@userName' },
	// youtube: { url: 'https://youtube.com/@userName' },
	// skype: { url: 'https://skype.com/userName' },
	// slack: { url: 'https://slack.com/userName' },
	// messenger: { url: 'https://messenger.com/userName' },
	// whatsapp: { url: 'https://whatsapp.com/userName' },
	// snapchat: { url: 'https://snapchat.com/userName' },
	// line: { url: 'https://line.com/userName' },
	// twitch: { url: 'https://twitch.com/userName' },
	weibo: { url: 'https://weibo.com/u/1593268993' },
	bilibili: { url: 'https://space.bilibili.com/314910023' },
	// dingding: { url: 'https://dingtalk.com/userName' },
	zhihu: { url: 'https://www.zhihu.com/people/jasonzz' },
	// douban: { url: 'https://douban.com/userName' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'jasonz1987/jasonz-website',
	'data-repo-id': 'R_kgDONc2rGg',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDONc2rGs4ClLv-',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'zh-CN',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
