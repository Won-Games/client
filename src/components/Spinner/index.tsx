import * as S from './styles'

export type SpinnerProps = {
  size?: number
}

const Spinner = ({ size = 38 }: SpinnerProps) => (
  <S.Wrapper
    width={size}
    height={size}
    viewBox="-3 -3 42 42"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#F231A5"
  >
    <title>Loading...</title>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="3">
        <circle strokeOpacity=".2" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </S.Wrapper>
)

export default Spinner
