deploy_system:
	docker stack deploy -c ./stacks/system/stack.yml home_system --with-registry-auth

deploy_test:
	docker stack deploy -c ./stacks/test/stack.yml home_test --with-registry-auth

deploy_eth:
	docker stack deploy -c ./stacks/eth/stack.yml home_eth --with-registry-auth

deploy_backup:
	docker stack deploy -c ./stacks/eth/stack.yml home_eth --with-registry-auth
