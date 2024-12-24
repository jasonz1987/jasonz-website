import { getCollection } from 'astro:content';

export async function getPosts(hidden?: boolean, sortByDate?: string) {
	let allPosts = await getCollection('posts', ({ data }) => {
		if (typeof hidden === 'boolean') {
			return hidden ? data.hidden === true : data.hidden !== true;
		}
		return true;
	});
	if (sortByDate !== undefined) {
		if (sortByDate === 'asc') {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return -1;
				}
				if (!bDate) {
					return 1;
				}
				return aDate.valueOf() - bDate.valueOf();
			});
		} else {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return 1;
				}
				if (!bDate) {
					return -1;
				}
				return bDate.valueOf() - aDate.valueOf();
			});
		}
	}
	return allPosts;
}

export async function getPostsGroupedByDate(
	hidden?: boolean,
	sortByDate?: string,
) {
	let allPosts = await getCollection('posts', ({ data }) => {
		if (typeof hidden === 'boolean') {
			return hidden ? data.hidden === true : data.hidden !== true;
		}
		return true;
	});

	// 排序文章
	if (sortByDate !== undefined) {
		allPosts = allPosts.sort((a, b) => {
			const aDate = a.data.lastmod ?? a.data.date;
			const bDate = b.data.lastmod ?? b.data.date;
			if (!aDate) {
				return -1;
			}
			if (!bDate) {
				return 1;
			}
			return sortByDate === 'asc'
				? aDate.valueOf() - bDate.valueOf()
				: bDate.valueOf() - aDate.valueOf();
		});
	}

	// 根据年月分组文章
	const groupedByYearMonth: Record<string, typeof allPosts> = {};

	for (const post of allPosts) {
		const date = post.data.lastmod ?? post.data.date;
		if (!date) continue; // 如果没有日期，跳过当前文章
		const year = date.getFullYear();
		const month = date.getMonth() + 1; // 月份从0开始，+1得到实际月份
		const yearMonthKey = `${year}-${month < 10 ? '0' : ''}${month}`;

		if (!groupedByYearMonth[yearMonthKey]) {
			groupedByYearMonth[yearMonthKey] = [];
		}
		groupedByYearMonth[yearMonthKey].push(post);
	}

	// 如果没有文章，返回空对象
	return groupedByYearMonth || {};
}
