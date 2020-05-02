## rax-pull-to-refresh-indicator

## Install

```
$ npm install rax-pull-to-refresh-indicator --save
```

## Usage

```
import PullToRefreshIndicator from 'rax-pull-to-refresh-indicator';
```

## API

### Props

|name|type|default|describe|
|:---------------|:--------|:----|:----------|
| state | PullToRefreshState | - | pull to refresh state |
| hasIcon | string | true | has icon in indicator |
| hasText | string | true | has text in indicator |

## Example

```
import { createElement, render } from 'rax';
import DriverUniversal from 'driver-universal';
import PullToRefreshIndicator, { PullToRefreshState } from 'rax-pull-to-refresh-indicator';

render(<PullToRefreshIndicator state={PullToRefreshState.REFRESHING} />, document.body, { driver: DriverUniversal });
```
