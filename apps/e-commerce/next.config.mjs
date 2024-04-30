/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'topperarg.vtexassets.com',
			},
		],
	},
};

export default nextConfig;
