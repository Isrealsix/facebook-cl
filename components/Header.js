import Image from 'next/image';
const Header = () => {
	return (
		<div>
			<h1>Header</h1>

			<div>
				<Image
					src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
					height={40}
					width={40}
					layout="fixed"
					alt="logo"
				/>
			</div>
		</div>
	);
};

export default Header;
