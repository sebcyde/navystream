import { NewBanner } from './components/NewBanner';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.Container}>
			<div className={styles.ScrollContainer}>
				<div className={styles.ScrollText}>This is scrolling text.</div>
			</div>
			<div className={styles.LogoContainer}>
				<span>Welcome to</span>
				<span>NavyStream</span>
			</div>

			{/* @ts-expect-error Async Server Component */}
			<NewBanner />
			<div className={styles.HomeContainer}></div>
		</main>
	);
}
