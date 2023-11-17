<script lang="ts">
	import cardPattern from "./bg-pattern-card.svg";
	import profilePicture from "./image-victor.jpg";

	const user = {
		name: "Victor Crest",
		age: 26,
		location: "London",
	};

	const userSocialInfo = {
		followers: "80K",
		likes: "803K",
		photos: "1.4K",
	};
</script>

<div class="card">
	<header>
		<img src={cardPattern} alt="" class="hero" />
		<a href="/"><img src={profilePicture} alt="" class="profile-picture" /></a>
	</header>
	<div class="personal-info">
		<div class="user-main-info">
			<h1 class="user-name">{user.name}</h1>
			<p class="user-age">{user.age}</p>
		</div>
		<p class="user-location">{user.location}</p>
	</div>
	<hr />
	<div class="account-info">
		<div class="account-info-block">
			<p class="account-info-number">{userSocialInfo.followers}</p>
			<p class="account-info-title">Followers</p>
		</div>
		<div class="account-info-block">
			<p class="account-info-number">{userSocialInfo.likes}</p>
			<p class="account-info-title">Likes</p>
		</div>
		<div class="account-info-block">
			<p class="account-info-number">{userSocialInfo.photos}</p>
			<p class="account-info-title">Photos</p>
		</div>
	</div>
</div>

<style>
	.card {
		--border-radius: 15px;

		background: var(--white);
		max-width: 50ch;
		min-width: 20ch;
		border-radius: var(--border-radius);
		text-align: center;
		box-shadow: var(--shadow) 0 10px 20px;
		margin: 1rem;
	}

	img {
		display: block;
	}

	header {
		position: relative;
		margin-bottom: 4rem;
	}

	p {
		color: var(--dark-gray);
	}

	h1,
	.account-info-number {
		color: inherit;
		font-weight: 700;
		font-size: 1.2rem;
	}

	.personal-info {
		margin: 0 0 1.5rem;
	}

	.user-main-info {
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}

	.user-age {
		font-size: 1.2rem;
	}

	.user-location {
		font-size: 0.9rem;
	}

	.account-info {
		display: flex;
		justify-content: space-around;
		margin: 1rem 0 1.5rem;
	}

	.hero {
		border-top-right-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	.profile-picture {
		position: absolute;
		transform: translateY(-50%) translateX(-50%);
		left: 50%;
		border-radius: 50%;
		border: 5px solid var(--white);

		&:hover {
			filter: contrast(1.3);
		}
	}
</style>
