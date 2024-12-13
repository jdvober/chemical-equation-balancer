import { createSystem, defaultConfig, mergeConfigs } from '@chakra-ui/react'
export const Colors = {
	/* Based on Dracula Theme */

	red: {
		DEFAULT: { value: '#FF5555' },
		lighter: { value: '#FF8787' },
		light: { value: '#FF6F6F' },
		dark: { value: '#FF2626' },
		darker: { value: '#F40000' },
	},
	pink: {
		DEFAULT: { value: '#FF79C6' },
		lighter: { value: '#EC8DC3' },
		light: { value: '#F684C4' },
		dark: { value: '#FF44AE' },
		darker: { value: '#FF0F97' },
	},
	orange: {
		DEFAULT: { value: '#FFB86C' },
		lighter: { value: '#FFCC95' },
		light: { value: '#FFC280' },
		dark: { value: '#FF9F37' },
		darker: { value: '#FF8604' },
	},
	yellow: {
		DEFAULT: { value: '#F1FA8C' },
		lighter: { value: '#E3EA9A' },
		light: { value: '#EAF292' },
		dark: { value: '#EAF854' },
		darker: { value: '#E4F61F' },
	},
	gold: {
		DEFAULT: { value: '#D7AF00' },
		lighter: { value: '#FFD82C' },
		light: { value: '#FFD101' },
		dark: { value: '#B89600' },
		darker: { value: '#997D00' },
	},
	yellowGreen: {
		DEFAULT: { value: '#CAFC03' },
		lighter: { value: '#D9FD4B' },
		light: { value: '#D2FD27' },
		dark: { value: '#AED802' },
		darker: { value: '#91B402' },
	},
	green: {
		DEFAULT: { value: '#50FA7B' },
		lighter: { value: '#6AE288' },
		light: { value: '#5EEE82' },
		dark: { value: '#24F859' },
		darker: { value: '#07E63F' },
	},
	blue: {
		DEFAULT: { value: '#527CFA' },
		lighter: { value: '#6A88E2' },
		light: { value: '#5E82EE' },
		dark: { value: '#2459F8' },
		darker: { value: '#073FE6' },
	},
	cyan: {
		DEFAULT: { value: '#8BE9FD' },
		lighter: { value: '#9CDEED' },
		light: { value: '#94E3F5' },
		dark: { value: '#54DEFC' },
		darker: { value: '#1DD3FC' },
	},
	purple: {
		DEFAULT: { value: '#BD93F9' },
		lighter: { value: '#D1B3FB' },
		light: { value: '#C8A4FA' },
		dark: { value: '#9E5FF6' },
		darker: { value: '#7D2AF3' },
	},
	tan: {
		DEFAULT: { value: '#B7A48A' },
		lighter: { value: '#CCBEAB' },
		light: { value: '#C2B19B' },
		dark: { value: '#A68E6E' },
		darker: { value: '#8E7757' },
	},
	white: {
		DEFAULT: { value: '#F8F8F2' },
		lighter: { value: '#FAFAF6' },
		light: { value: '#F9F9F4' },
		dark: { value: '#ECECDB' },
		darker: { value: '#DFDFC4' },
	},
	black: {
		DEFAULT: { value: '#1A1A21' },
		lighter: { value: '#292936' },
		light: { value: '#21212C' },
		dark: { value: '#121217' },
		darker: { value: '#0A0A0C' },
	},
	gray: {
		DEFAULT: { value: '#44475A' },
		lighter: { value: '#707493' },
		light: { value: '#5A5D77' },
		dark: { value: '#3F4254' },
		darker: { value: '#353847' },
	},
	bg: {
		DEFAULT: { value: '#282A36' },
		lighter: { value: '#4D5168' },
		light: { value: '#404457' },
		dark: { value: '#21232D' },
		darker: { value: '#1C1D26' },
	},
	background: {
		DEFAULT: { value: '#282A36' },
		lighter: { value: '#4D5168' },
		light: { value: '#404457' },
		dark: { value: '#21232D' },
		darker: { value: '#1C1D26' },
	},
	currentLine: {
		DEFAULT: { value: '#44475A' },
		lighter: { value: '#5A5F79' },
		light: { value: '#45A5D77' },
		dark: { value: '#3A3D4D' },
		darker: { value: '#313340' },
	},
	cl: {
		DEFAULT: { value: '#44475A' },
		lighter: { value: '#5A5F79' },
		light: { value: '#45A5D77' },
		dark: { value: '#3A3D4D' },
		darker: { value: '#313340' },
	},
	fg: {
		DEFAULT: { value: '#F8F8F2' },
		lighter: { value: '#FAFAF6' },
		light: { value: '#F9F9F4' },
		dark: { value: '#ECECDB' },
		darker: { value: '#DFDFC4' },
	},
	foreground: {
		DEFAULT: { value: '#F8F8F2' },
		lighter: { value: '#FAFAF6' },
		light: { value: '#F9F9F4' },
		dark: { value: '#ECECDB' },
		darker: { value: '#DFDFC4' },
	},
	comment: {
		DEFAULT: { value: '#6272A4' },
		lighter: { value: '#8E9ABE' },
		light: { value: '#7785B1' },
		dark: { value: '#51608E' },
		darker: { value: '#445076' },
	},
}

// Put into a format that colors: can use

const config = mergeConfigs(defaultConfig, {
	cssVarsRoot: ':where(:root, :host)',
	globalCss: {
		'html, body': {
			background: Colors.bg.DEFAULT.value,
		},
	},
	theme: {
		tokens: {
			colors: Colors,
		},
	},
})

export const system = createSystem(config)

export const Swatches = [
	{
		name: 'Red',
		colors: [
			{ name: 'Lighter', value: Colors.red.lighter.value },
			{ name: 'Light', value: Colors.red.light.value },
			{ name: 'Default', value: Colors.red.DEFAULT.value },
			{ name: 'Dark', value: Colors.red.dark.value },
			{ name: 'Darker', value: Colors.red.darker.value },
		],
	},
	{
		name: 'Pink',
		colors: [
			{ name: 'Lighter', value: Colors.pink.lighter.value },
			{ name: 'Light', value: Colors.pink.light.value },
			{ name: 'Default', value: Colors.pink.DEFAULT.value },
			{ name: 'Dark', value: Colors.pink.dark.value },
			{ name: 'Darker', value: Colors.pink.darker.value },
		],
	},

	{
		name: 'Orange',
		colors: [
			{ name: 'Lighter', value: Colors.orange.lighter.value },
			{ name: 'Light', value: Colors.orange.light.value },
			{ name: 'Default', value: Colors.orange.DEFAULT.value },
			{ name: 'Dark', value: Colors.orange.dark.value },
			{ name: 'Darker', value: Colors.orange.darker.value },
		],
	},
	{
		name: 'Yellow',
		colors: [
			{ name: 'Lighter', value: Colors.yellow.lighter.value },
			{ name: 'Light', value: Colors.yellow.light.value },
			{ name: 'Default', value: Colors.yellow.DEFAULT.value },
			{ name: 'Dark', value: Colors.yellow.dark.value },
			{ name: 'Darker', value: Colors.yellow.darker.value },
		],
	},
	{
		name: 'Gold',
		colors: [
			{ name: 'Lighter', value: Colors.gold.lighter.value },
			{ name: 'Light', value: Colors.gold.light.value },
			{ name: 'Default', value: Colors.gold.DEFAULT.value },
			{ name: 'Dark', value: Colors.gold.dark.value },
			{ name: 'Darker', value: Colors.gold.darker.value },
		],
	},
	{
		name: 'Yellow Green',
		colors: [
			{ name: 'Lighter', value: Colors.yellowGreen.lighter.value },
			{ name: 'Light', value: Colors.yellowGreen.light.value },
			{ name: 'Default', value: Colors.yellowGreen.DEFAULT.value },
			{ name: 'Dark', value: Colors.yellowGreen.dark.value },
			{ name: 'Darker', value: Colors.yellowGreen.darker.value },
		],
	},
	{
		name: 'Green',
		colors: [
			{ name: 'Lighter', value: Colors.green.lighter.value },
			{ name: 'Light', value: Colors.green.light.value },
			{ name: 'Default', value: Colors.green.DEFAULT.value },
			{ name: 'Dark', value: Colors.green.dark.value },
			{ name: 'Darker', value: Colors.green.darker.value },
		],
	},
	{
		name: 'Blue',
		colors: [
			{ name: 'Lighter', value: Colors.blue.lighter.value },
			{ name: 'Light', value: Colors.blue.light.value },
			{ name: 'Default', value: Colors.blue.DEFAULT.value },
			{ name: 'Dark', value: Colors.blue.dark.value },
			{ name: 'Darker', value: Colors.blue.darker.value },
		],
	},
	{
		name: 'Cyan',
		colors: [
			{ name: 'Lighter', value: Colors.cyan.lighter.value },
			{ name: 'Light', value: Colors.cyan.light.value },
			{ name: 'Default', value: Colors.cyan.DEFAULT.value },
			{ name: 'Dark', value: Colors.cyan.dark.value },
			{ name: 'Darker', value: Colors.cyan.darker.value },
		],
	},
	{
		name: 'Purple',
		colors: [
			{ name: 'Lighter', value: Colors.purple.lighter.value },
			{ name: 'Light', value: Colors.purple.light.value },
			{ name: 'Default', value: Colors.purple.DEFAULT.value },
			{ name: 'Dark', value: Colors.purple.dark.value },
			{ name: 'Darker', value: Colors.purple.darker.value },
		],
	},
	{
		name: 'Tan',
		colors: [
			{ name: 'Lighter', value: Colors.tan.lighter.value },
			{ name: 'Light', value: Colors.tan.light.value },
			{ name: 'Default', value: Colors.tan.DEFAULT.value },
			{ name: 'Dark', value: Colors.tan.dark.value },
			{ name: 'Darker', value: Colors.tan.darker.value },
		],
	},
	{
		name: 'White a.k.a. Foreground',
		colors: [
			{ name: 'Lighter', value: Colors.white.lighter.value },
			{ name: 'Light', value: Colors.white.light.value },
			{ name: 'Default', value: Colors.white.DEFAULT.value },
			{ name: 'Dark', value: Colors.white.dark.value },
			{ name: 'Darker', value: Colors.white.darker.value },
		],
	},
	{
		name: 'Comment',
		colors: [
			{ name: 'Lighter', value: Colors.comment.lighter.value },
			{ name: 'Light', value: Colors.comment.light.value },
			{ name: 'Default', value: Colors.comment.DEFAULT.value },
			{ name: 'Dark', value: Colors.comment.dark.value },
			{ name: 'Darker', value: Colors.comment.darker.value },
		],
	},
	{
		name: 'Gray',
		colors: [
			{ name: 'Lighter', value: Colors.gray.lighter.value },
			{ name: 'Light', value: Colors.gray.light.value },
			{ name: 'Default', value: Colors.gray.DEFAULT.value },
			{ name: 'Dark', value: Colors.gray.dark.value },
			{ name: 'Darker', value: Colors.gray.darker.value },
		],
	},
	{
		name: 'Current Line',
		colors: [
			{ name: 'Lighter', value: Colors.currentLine.lighter.value },
			{ name: 'Light', value: Colors.currentLine.light.value },
			{ name: 'Default', value: Colors.currentLine.DEFAULT.value },
			{ name: 'Dark', value: Colors.currentLine.dark.value },
			{ name: 'Darker', value: Colors.currentLine.darker.value },
		],
	},
	{
		name: 'Background',
		colors: [
			{ name: 'Lighter', value: Colors.bg.lighter.value },
			{ name: 'Light', value: Colors.bg.light.value },
			{ name: 'Default', value: Colors.bg.DEFAULT.value },
			{ name: 'Dark', value: Colors.bg.dark.value },
			{ name: 'Darker', value: Colors.bg.darker.value },
		],
	},
	{
		name: 'Black',
		colors: [
			{ name: 'Lighter', value: Colors.black.lighter.value },
			{ name: 'Light', value: Colors.black.light.value },
			{ name: 'Default', value: Colors.black.DEFAULT.value },
			{ name: 'Dark', value: Colors.black.dark.value },
			{ name: 'Darker', value: Colors.black.darker.value },
		],
	},
]
