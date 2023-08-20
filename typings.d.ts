interface SanityBody {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_updatedAt: Date;
}

interface Image {
	_type: 'image';
	assets: {
		_ref: string;
		_type: 'reference';
	};
}

export interface PageInfo extends SanityBody {
	_type: 'pageInfo';
	address: string;
	backgroundInformation: string;
	email: string;
	role: string;
	heroImage: Image;
	title: string;
	phoneNumber: string;
	profilePic: Image;
}

export interface Technology extends SanityBody {
	_type: 'skill';
	image: Image;
	title: string;
}

export interface Skill extends SanityBody {
	_type: 'skill';
	image: Image;
	title: string;
}

export interface Project extends SanityBody {
	type: 'project';
	image: Image;
	title: string;
	linkToBuild: string;
	summary: string;
	linkToGithub: string;
	technologies: Technology[];
}

export interface Experience extends SanityBody {
	type: 'experience';
	jobTitle: string;
	role: string;
	companyImage: Image;
	company: string;
	dateStarted: Date;
	dateEnded: Date;
	isCurrentlyWorkingHere: boolean;
	technologies: Technology[];
	points: string[];
}

export interface Social extends SanityBody {
	title: string;
	url: string;
	_type: 'social';
}
