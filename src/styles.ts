import { CSSProperties } from '@rax-types/rax';

const styles: { [key: string]: CSSProperties } = {
  container: {
    height: 80,
    width: 750,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 10,
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowView: {},
  reloadView: {},
  icon: {
    color: '#666',
    fontSize: 36,
  },
  text: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 28,
    color: '#666',
  },
};

export default styles;
