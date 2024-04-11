export type Categories =
	| 'basics'
	| 'content'
	| 'data'
	| 'form'
	| 'special components'
	| 'navigation';
export type Components =
	| string
	| 'document'
	| 'language'
	| 'color'
	| 'basics'
	| 'footer'
	| 'header'
	| 'main'
	| 'navigation'
	| 'text'
	| 'image'
	| 'icon'
	| 'accordion'
	| 'charts'
	| 'input'
	| 'label'
	| 'button'
	| 'radio button'
	| 'rating'
	| 'language switcher'
	| 'breadcrumb'
	| 'multi-step'
	| 'link';
export type SuccessCriterias = '1.1.1' | '1.1.2';

export type Post = {
	title: string;
	slug: string;
	date: string;
	source: string;
	categories: Categories[];
	components: Components[];
	published: boolean;
	successCriteria: SuccessCriterias[];
};
