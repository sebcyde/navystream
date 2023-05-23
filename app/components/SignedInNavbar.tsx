import styles from '../page.module.scss';

export const SignedInNavbar = () => {
	return (
		<div className={`${styles.SignedInNavbar} ${styles.Navbar}`}>
			<h2 className={styles.Logo}>NavyStream</h2>
			<div className={styles.LinkContainer}>
				<a>Example</a>
				<a>Example</a>
				<a>Example</a>
				<a>Example</a>
			</div>
			<a>Settings</a>
		</div>
	);
};
